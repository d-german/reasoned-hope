# GitHub Pages + Algolia Deployment Setup Guide

This guide will help you complete the setup for deploying your Writerside documentation to GitHub Pages with integrated Algolia search.

## 🔧 Required Configuration Steps

### 1. Configure GitHub Repository Secrets

You need to add the Algolia Write API Key as a repository secret:

1. Go to your repository on GitHub: `https://github.com/d-german/reasoned-hope`
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add the following secret:
   - **Name**: `ALGOLIA_WRITE_API_KEY`
   - **Value**: `73637d0f99d13697983b68027df485ff`

### 2. Enable GitHub Pages

1. In your repository, go to **Settings** tab
2. Scroll down to **Pages** section in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Configure Repository Permissions

Ensure the repository has the correct permissions for GitHub Actions:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## 🚀 Deployment Process

Once the above configuration is complete:

1. **Automatic Deployment**: Any push to the `main` branch will trigger the deployment workflow
2. **Manual Deployment**: You can also trigger deployment manually from the Actions tab
3. **Pull Request Testing**: Pull requests will build and test the documentation without deploying

## 📋 Workflow Overview

The deployment workflow (`.github/workflows/deploy.yml`) performs these steps:

### Build Phase
- Checks out the repository
- Builds the Writerside documentation using Docker
- Saves build artifacts

### Test Phase
- Downloads build artifacts
- Runs Writerside documentation tests
- Validates the documentation structure

### Deploy Phase (main branch only)
- Downloads build artifacts
- Extracts the built documentation
- Sets up Node.js for Algolia integration
- Indexes all documentation content to Algolia
- Integrates search UI into the generated HTML
- Deploys to GitHub Pages

## 🔍 Algolia Search Configuration

### Search Index Details
- **Application ID**: `2TVOV323T5`
- **Index Name**: `writerside-docs`
- **Search API Key**: `a2cfec1657f42aeb0733ad007973767f` (public, read-only)
- **Write API Key**: Stored as repository secret (secure)

### Search Features
- **Real-time search** as you type
- **Content highlighting** in search results
- **Hierarchical content indexing** (titles, headings, content)
- **Automatic content updates** when documentation changes

### Search UI Integration
The search interface is automatically added to your documentation pages and includes:
- Search input box with placeholder text
- Real-time search results
- Highlighted matching text
- Clickable results that navigate to the correct page sections

## 📁 Project Structure

```
reasoned-hope/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Deployment workflow
├── Writerside/
│   ├── topics/                 # Documentation content
│   ├── images/                 # Images and media
│   ├── writerside.cfg         # Main configuration
│   └── hi.tree                # Table of contents
├── README.md                   # Project documentation
├── DEPLOYMENT_SETUP.md         # This setup guide
└── .gitignore                 # Git ignore rules
```

## 🎯 Next Steps

After completing the configuration:

1. **Test the Setup**: Push a small change to trigger the first deployment
2. **Monitor the Build**: Check the Actions tab to see the workflow progress
3. **Verify Deployment**: Once complete, visit your GitHub Pages URL
4. **Test Search**: Try searching for content to verify Algolia integration
5. **Add Content**: Start adding your documentation content to `Writerside/topics/`

## 🔗 Important URLs

After deployment, your documentation will be available at:
- **Live Site**: `https://d-german.github.io/reasoned-hope/`
- **Repository**: `https://github.com/d-german/reasoned-hope`
- **Actions**: `https://github.com/d-german/reasoned-hope/actions`

## 🛠️ Troubleshooting

### Common Issues

**Build Fails**
- Check that repository secrets are configured correctly
- Verify GitHub Actions permissions are set to "Read and write"
- Review the Actions logs for specific error messages

**Search Not Working**
- Verify the Algolia Write API Key is correctly set as a repository secret
- Check that the indexing step completed successfully in the Actions logs
- Ensure the Algolia application ID and search API key are correct

**Pages Not Deploying**
- Confirm GitHub Pages is set to use "GitHub Actions" as the source
- Check that the workflow completed successfully
- Verify the repository has Pages enabled

### Getting Help

- **GitHub Actions Issues**: Check the Actions tab for detailed logs
- **Writerside Issues**: Refer to [JetBrains Writerside documentation](https://www.jetbrains.com/help/writerside/)
- **Algolia Issues**: Check the [Algolia documentation](https://www.algolia.com/doc/)

## ✅ Verification Checklist

Before considering the setup complete, verify:

- [ ] Repository secrets are configured
- [ ] GitHub Pages is enabled with GitHub Actions source
- [ ] Repository permissions allow Actions to write
- [ ] First deployment workflow runs successfully
- [ ] Documentation site loads at the GitHub Pages URL
- [ ] Search functionality works and returns results
- [ ] Content is properly indexed in Algolia
- [ ] All navigation and links work correctly

Once all items are checked, your Writerside documentation with Algolia search is fully deployed and ready for use!
