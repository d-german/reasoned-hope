# 🔍 Algolia Search Integration Setup

This guide will help you set up Algolia search functionality for your Writerside documentation deployed on GitHub Pages.

## ✅ Pre-configured Settings

Your Algolia integration is already configured with the following settings:

- **Application ID**: `2TVOV323T5`
- **Search API Key**: `a2cfec1657f42aeb0733ad007973767f` (public, safe for frontend)
- **Index Name**: `reasoned-hope-docs`

## 🔐 Required GitHub Secrets

You need to add the **Write API Key** as a GitHub repository secret:

### Step 1: Add Repository Secret

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secret:

   **Name**: `ALGOLIA_WRITE_API_KEY`  
   **Value**: `73637d0f99d13697983b68027df485ff`

⚠️ **Important**: The Write API Key is sensitive and should never be exposed in your code or logs.

## 🚀 Deployment Options

### Option 1: Use Enhanced Workflow (Recommended)

The enhanced workflow `.github/workflows/deploy-writerside-with-search.yml` is already configured with your Algolia credentials and includes:

- ✅ **Automatic Content Indexing**: Extracts and indexes all documentation content
- ✅ **Advanced Search UI**: Full-featured search page with filters and pagination
- ✅ **Content Structure Awareness**: Indexes headings, sections, and hierarchy
- ✅ **Search Analytics**: Built-in search statistics and refinements

### Option 2: Manual Indexing

If you prefer to index content manually, you can use the provided scripts:

```bash
# Install dependencies
npm install algoliasearch cheerio

# Set environment variable
export ALGOLIA_WRITE_API_KEY="73637d0f99d13697983b68027df485ff"

# Run indexing script (after building docs)
node algolia-indexer.js
```

## 🎯 Search Features

Your search integration includes:

### 🔍 **Advanced Search UI**
- Real-time search as you type
- Highlighted search terms
- Content type and heading level filters
- Pagination for large result sets
- Keyboard shortcuts (Ctrl+K to focus search)

### 📊 **Content Structure**
- **Hierarchical Indexing**: Indexes by headings (H1-H6)
- **Section-based**: Each heading section is a separate searchable record
- **Content Types**: Automatically categorizes documentation content
- **URL Mapping**: Direct links to specific sections

### 🎨 **User Experience**
- **Responsive Design**: Works on desktop and mobile
- **Fast Search**: Powered by Algolia's global CDN
- **No Results Handling**: Helpful suggestions when no results found
- **Search Statistics**: Shows result count and search time

## 📁 Search Files

The integration creates these files in your documentation:

- **`search.html`**: Main search interface
- **`search-integration.js`**: Search functionality and configuration
- **`search-redirect.html`**: Simple redirect for search access

## 🌐 Accessing Search

After deployment, your search will be available at:

- **Main Search Page**: `https://yourusername.github.io/reasoned-hope/search.html`
- **Direct Access**: Link to search from your documentation pages

## 🔧 Customization Options

### Search Configuration

Edit `Writerside/search-integration.js` to customize:

```javascript
// Modify search behavior
const searchConfig = {
  indexName: 'reasoned-hope-docs',
  searchClient: searchClient,
  routing: true,  // Enable URL routing
  searchFunction(helper) {
    // Custom search logic
  }
};
```

### Styling

Edit the CSS in `Writerside/search.html` to match your brand:

```css
/* Custom color scheme */
.search-header {
  background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
}

.hit-title {
  color: #your-brand-color;
}
```

### Content Filtering

Modify the indexing script to include/exclude specific content:

```javascript
// Skip certain files
if (file.includes('internal-') || file.includes('draft-')) {
  return; // Skip this file
}

// Add custom metadata
records.push({
  // ... existing fields
  category: 'user-guide',  // Custom category
  priority: 'high',        // Custom priority
  tags: ['beginner', 'api'] // Custom tags
});
```

## 🐛 Troubleshooting

### Search Not Working
1. **Check GitHub Secrets**: Ensure `ALGOLIA_WRITE_API_KEY` is set correctly
2. **Verify Workflow**: Check Actions tab for build errors
3. **Index Status**: Check Algolia dashboard for index content

### No Search Results
1. **Content Indexing**: Verify content was indexed (check workflow logs)
2. **API Keys**: Ensure search API key is correct in the frontend
3. **Index Name**: Verify index name matches in all configurations

### Build Failures
1. **Dependencies**: Ensure `algoliasearch` and `cheerio` are installed
2. **File Paths**: Check that search files exist in the Writerside directory
3. **Permissions**: Verify GitHub Actions has proper permissions

## 📈 Analytics & Monitoring

### Algolia Dashboard
Monitor your search usage at: https://www.algolia.com/dashboard

- **Search Analytics**: Query volume, popular searches, no-result queries
- **Index Management**: Content updates, index size, record count
- **Performance**: Search speed, API usage

### GitHub Actions Logs
Monitor indexing process in your repository's Actions tab:
- Build logs show indexing progress
- Error logs help diagnose issues
- Success logs confirm content updates

## 🔄 Content Updates

Your search index automatically updates when:
- ✅ New content is pushed to `main` branch
- ✅ Existing content is modified
- ✅ Documentation structure changes

The indexing process:
1. Builds fresh documentation
2. Extracts all text content and structure
3. Replaces entire search index
4. Deploys updated search interface

## 🎉 You're All Set!

Your Algolia search integration is now configured and ready to use. The next time you push to the `main` branch, your documentation will be built, indexed, and deployed with full search functionality!

**Next Steps:**
1. Add the `ALGOLIA_WRITE_API_KEY` secret to your repository
2. Push changes to trigger the enhanced workflow
3. Visit your search page once deployed
4. Customize the search UI to match your preferences
