// Enhanced Algolia Search Integration for Writerside
// This script provides comprehensive search functionality with content structure awareness

const ALGOLIA_CONFIG = {
  appId: '2TVOV323T5',
  searchApiKey: 'a2cfec1657f42aeb0733ad007973767f',
  indexName: 'reasoned-hope-docs'
};

// Initialize Algolia search client
const searchClient = algoliasearch(ALGOLIA_CONFIG.appId, ALGOLIA_CONFIG.searchApiKey);

// Enhanced search configuration
const searchConfig = {
  indexName: ALGOLIA_CONFIG.indexName,
  searchClient: searchClient,
  routing: true,
  searchFunction(helper) {
    const query = helper.getQuery();
    if (query.query === '') {
      // Show recent or popular content when no query
      helper.setQuery('').search();
    } else {
      helper.search();
    }
  }
};

// Custom hit template with enhanced formatting
const hitTemplate = `
<div class="hit-item">
  <div class="hit-header">
    <a href="{{url}}" class="hit-title">
      {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
    </a>
    {{#heading}}
      <div class="hit-breadcrumb">
        {{#helpers.highlight}}{ "attribute": "heading" }{{/helpers.highlight}}
      </div>
    {{/heading}}
  </div>
  <div class="hit-content">
    {{#helpers.highlight}}{ "attribute": "content" }{{/helpers.highlight}}
  </div>
  <div class="hit-meta">
    {{#level}}<span class="hit-level">H{{level}}</span>{{/level}}
    {{#type}}<span class="hit-type">{{type}}</span>{{/type}}
  </div>
</div>
`;

// Enhanced search widgets configuration
const searchWidgets = [
  // Search box with advanced options
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search documentation...',
    showReset: true,
    showSubmit: true,
    showLoadingIndicator: true,
    autofocus: true,
    searchAsYouType: true,
    queryHook(query, search) {
      // Add custom query processing if needed
      search(query);
    }
  }),

  // Enhanced hits display
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: hitTemplate,
      empty: `
        <div class="no-results">
          <h3>No results found</h3>
          <p>Try different keywords or check your spelling.</p>
          <div class="search-suggestions">
            <h4>Suggestions:</h4>
            <ul>
              <li>Use more general terms</li>
              <li>Check for typos</li>
              <li>Try synonyms</li>
            </ul>
          </div>
        </div>
      `
    },
    transformItems(items) {
      // Transform items for better display
      return items.map(item => ({
        ...item,
        url: item.url.startsWith('/') ? item.url : `/${item.url}`
      }));
    }
  }),

  // Search statistics
  instantsearch.widgets.stats({
    container: '#stats',
    templates: {
      text: `
        {{#hasNoResults}}No results{{/hasNoResults}}
        {{#hasOneResult}}1 result{{/hasOneResult}}
        {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}
        found in {{processingTimeMS}}ms
      `
    }
  }),

  // Pagination
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    showFirst: false,
    showLast: false,
    showPrevious: true,
    showNext: true,
    padding: 3
  }),

  // Refinement filters
  instantsearch.widgets.refinementList({
    container: '#type-filter',
    attribute: 'type',
    limit: 10,
    showMore: true,
    searchable: false,
    templates: {
      header: 'Content Type'
    }
  }),

  instantsearch.widgets.refinementList({
    container: '#level-filter',
    attribute: 'level',
    limit: 6,
    sortBy: ['name:asc'],
    templates: {
      header: 'Heading Level',
      item: '<label><input type="checkbox" value="{{value}}" {{#isRefined}}checked{{/isRefined}}> H{{value}} ({{count}})</label>'
    }
  }),

  // Clear refinements
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
    templates: {
      resetLabel: 'Clear all filters'
    }
  }),

  // Current refinements display
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
    transformItems(items) {
      return items.map(item => ({
        ...item,
        refinements: item.refinements.map(refinement => ({
          ...refinement,
          label: refinement.attribute === 'level' ? `H${refinement.value}` : refinement.value
        }))
      }));
    }
  })
];

// Initialize search when DOM is ready
function initializeSearch() {
  // Check if required elements exist
  const requiredElements = ['#searchbox', '#hits'];
  const missingElements = requiredElements.filter(selector => !document.querySelector(selector));
  
  if (missingElements.length > 0) {
    console.warn('Missing search elements:', missingElements);
    return;
  }

  // Create search instance
  const search = instantsearch(searchConfig);

  // Add all widgets
  searchWidgets.forEach(widget => {
    if (document.querySelector(widget.container)) {
      search.addWidgets([widget]);
    }
  });

  // Start search
  search.start();

  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Focus search on Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('#searchbox input');
      if (searchInput) {
        searchInput.focus();
      }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
      const searchInput = document.querySelector('#searchbox input');
      if (searchInput && document.activeElement === searchInput) {
        searchInput.blur();
      }
    }
  });

  console.log('Algolia search initialized successfully');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSearch);
} else {
  initializeSearch();
}

// Export for manual initialization if needed
window.initializeSearch = initializeSearch;
