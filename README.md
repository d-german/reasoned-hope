# Reasoned Hope Documentation

This is a documentation project built with JetBrains Writerside and deployed to GitHub Pages with integrated Algolia search functionality.

## 🚀 Live Documentation

The documentation is automatically built and deployed to GitHub Pages: [https://d-german.github.io/reasoned-hope/](https://d-german.github.io/reasoned-hope/)

> **Status**: Ready for deployment! The site will be available once the first workflow run completes.

## 🔍 Search Functionality

This documentation includes powerful search capabilities powered by Algolia:
- **Real-time search** as you type
- **Content indexing** of all documentation pages
- **Highlighted search results** with context
- **Automatic content updates** when documentation changes

## 📖 About This Project

This documentation is built using:
- **JetBrains Writerside** - Modern documentation authoring tool
- **GitHub Actions** - Automated building and deployment
- **GitHub Pages** - Static site hosting
- **Algolia Search** - Enhanced search functionality

## 🛠️ Development

### Local Development

To work with this documentation locally:

1. Install JetBrains Writerside or use IntelliJ IDEA with the Writerside plugin
2. Open the project in your IDE
3. Edit content in the `Writerside/topics/` directory
4. Preview changes using the built-in preview functionality

### Content Structure

- `Writerside/topics/` - Documentation content (Markdown and XML)
- `Writerside/images/` - Images and media files
- `Writerside/writerside.cfg` - Main configuration file
- `Writerside/hi.tree` - Table of contents structure

### Adding New Content

1. Create new `.md` files in the `Writerside/topics/` directory
2. Add them to the table of contents in `Writerside/hi.tree`
3. Use Writerside's semantic markup for enhanced formatting
4. Commit and push - the site will automatically rebuild and deploy

## 🔧 Deployment Configuration

### GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml` which:
1. **Builds** the Writerside project using Docker
2. **Tests** the documentation for issues
3. **Indexes** content to Algolia for search
4. **Deploys** to GitHub Pages

### Algolia Configuration

Search is powered by Algolia with the following setup:
- **Application ID**: `2TVOV323T5`
- **Search API Key**: `a2cfec1657f42aeb0733ad007973767f` (public, read-only)
- **Index Name**: `writerside-docs`

The Write API Key is stored as a GitHub repository secret for security.

### Repository Secrets

The following secrets are configured in the repository:
- `ALGOLIA_WRITE_API_KEY` - Used for indexing content (keep secure)

## 📝 Content Guidelines

When creating content:
- Use clear, descriptive headings for better search indexing
- Include relevant keywords naturally in your content
- Use Writerside's semantic markup for procedures, code blocks, and other structured content
- Add alt text to images for accessibility
- Keep content well-organized with logical hierarchy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes to the documentation
4. Test locally if possible
5. Submit a pull request

Changes to the main branch will automatically trigger a rebuild and deployment.

## 📄 License

This documentation project is open source. Please see the repository for license details.

## 🆘 Support

For issues with:
- **Content**: Create an issue in this repository
- **Writerside**: Check the [official documentation](https://www.jetbrains.com/help/writerside/)
- **Deployment**: Review the GitHub Actions logs for build details
- **Search**: Verify Algolia configuration and indexing status

---

Built with ❤️ using JetBrains Writerside, GitHub Actions, and Algolia Search.
