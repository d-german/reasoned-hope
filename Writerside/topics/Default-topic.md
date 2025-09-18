# Welcome to Reasoned Hope Documentation

Welcome to the Reasoned Hope documentation site! This comprehensive guide provides everything you need to understand and work with our project. Our documentation is built with JetBrains Writerside and features powerful search capabilities powered by Algolia.

## 🔍 Search Your Way Through

This documentation includes advanced search functionality that helps you find exactly what you're looking for:
- **Real-time search** - Results appear as you type
- **Content highlighting** - See your search terms highlighted in context
- **Smart indexing** - All content is automatically indexed and kept up-to-date
- **Hierarchical results** - Find information at the right level of detail

Try searching for terms like "procedure", "markup", or "configuration" to see the search in action!

## Getting Started

### Add new topics
You can create empty topics, or choose a template for different types of content that contains some boilerplate structure to help you get started:

![Create new topic options](new_topic_options.png){ border-effect="line" thumbnail="true" width="321"}

### Documentation Structure
Our documentation is organized into logical sections:
- **Getting Started** - Basic concepts and initial setup
- **User Guides** - Step-by-step instructions for common tasks
- **Reference** - Detailed technical information
- **Examples** - Practical code samples and use cases

## Write content
%product% supports two types of markup: Markdown and XML.
When you create a new help article, you can choose between two topic types, but this doesn't mean you have to stick to a single format.
You can author content in Markdown and extend it with semantic attributes or inject entire XML elements.

For example, this is how you inject a procedure:

<procedure title="Inject a procedure" id="inject-a-procedure">
    <step>
        <p>Start typing <code>procedure</code> and select a procedure type from the completion suggestions:</p>
        <img src="completion_procedure.png" alt="completion suggestions for procedure" border-effect="line"/>
    </step>
    <step>
        <p>Press <shortcut>Tab</shortcut> or <shortcut>Enter</shortcut> to insert the markup.</p>
    </step>
</procedure>

And here is how you can include a snippet from a library:

<include from="lib.md" element-id="sample"/>

## Add interactive elements

### Tabs
To add switchable content, use tabs (start typing `tabs` on a new line).

<tabs>
    <tab title="Markdown">
        <code-block lang="plain text">![Alt Text](new_topic_options.png){ width=450 }</code-block>
    </tab>
    <tab title="Semantic markup">
        <code-block lang="xml">
            <![CDATA[<img src="new_topic_options.png" alt="Alt text" width="450px"/>]]></code-block>
    </tab>
</tabs>

### Collapsible blocks
Besides injecting entire XML elements, you can use attributes to configure the behavior of certain elements.
For example, you can collapse a chapter that contains non-essential information like this:

#### Supplementary info {collapsible="true"}
Content under such header will be collapsed by default, but you can modify the behavior by adding the following attribute:
`default-state="expanded"`

## Convert selection to XML
If you need to extend an element with more functions, you can convert selected content from Markdown to semantic markup.
For example, if you want to merge cells in a table, it's much easier to convert it to XML than do this in Markdown.
Position the caret anywhere in the table and press <shortcut>Alt+Enter</shortcut>:

<img src="convert_table_to_xml.png" alt="Convert table to XML" width="706" border-effect="line"/>

## Feedback and support
Please report any issues, usability improvements, or feature requests to our 
<a href="https://youtrack.jetbrains.com/newIssue?project=WRS">YouTrack project</a>
(you will need to register).

You are welcome to join our
<a href="https://jb.gg/WRS_Slack">public Slack workspace</a>.
Before you do, please read our [Code of conduct](https://www.jetbrains.com/help/writerside/writerside-code-of-conduct.html).
We assume that you’ve read and acknowledged it before joining.

You can also always email us at [writerside@jetbrains.com](mailto:writerside@jetbrains.com).

<seealso>
    <category ref="wrs">
        <a href="https://www.jetbrains.com/help/writerside/markup-reference.html">Markup reference</a>
        <a href="https://www.jetbrains.com/help/writerside/manage-table-of-contents.html">Reorder topics in the TOC</a>
        <a href="https://www.jetbrains.com/help/writerside/local-build.html">Build and publish</a>
        <a href="https://www.jetbrains.com/help/writerside/configure-search.html">Configure Search</a>
    </category>
</seealso>
