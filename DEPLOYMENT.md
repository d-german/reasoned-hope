# Writerside GitHub Pages Deployment

This repository contains GitHub Actions workflows to automatically build and deploy your Writerside documentation to GitHub Pages.

## 🚀 Quick Setup

### 1. Enable GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the settings

### 2. Choose Your Workflow

You have two workflow options:

#### Option A: Basic Deployment (Recommended)
- File: `.github/workflows/deploy-writerside.yml`
- Features: Build, test, and deploy documentation
- No additional setup required

#### Option B: Deployment with Search
- File: `.github/workflows/deploy-writerside-with-search.yml`
- Features: Everything from Option A + Algolia search integration
- Requires Algolia setup (see below)

### 3. Trigger Deployment

Push to the `main` branch or manually trigger the workflow:
- **Automatic**: Push commits to `main` branch
- **Manual**: Go to **Actions** tab → Select workflow → **Run workflow**

## 🔍 Search Integration Setup

Your repository is **pre-configured** with Algolia search! Here's what's already set up:

- ✅ **Application ID**: `2TVOV323T5`
- ✅ **Search API Key**: `a2cfec1657f42aeb0733ad007973767f`
- ✅ **Index Name**: `reasoned-hope-docs`
- ✅ **Enhanced Search UI**: Full-featured search page with filters

### Quick Setup (1 step only!)

1. **Add Repository Secret**:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `ALGOLIA_WRITE_API_KEY`
   - Value: `73637d0f99d13697983b68027df485ff`

2. **Use Enhanced Workflow**:
   - The search-enabled workflow is ready to use
   - Search is automatically enabled (`ENABLE_SEARCH: true`)

### 🎯 Search Features
- **Real-time search** as you type
- **Content structure awareness** (headings, sections)
- **Advanced filters** (content type, heading levels)
- **Responsive design** for all devices
- **Keyboard shortcuts** (Ctrl+K to focus)

### 🌐 Access Search
After deployment: `https://yourusername.github.io/reasoned-hope/search.html`

📖 **Detailed Setup Guide**: See `ALGOLIA_SETUP.md` for complete configuration options.

## 📁 Project Structure

Your Writerside project should have this structure:
```
your-repo/
├── .github/
│   └── workflows/
│       ├── deploy-writerside.yml
│       └── deploy-writerside-with-search.yml
├── Writerside/
│   ├── topics/
│   │   ├── Default-topic.md
│   │   └── Empty-MD-Topic.md
│   ├── hi.tree
│   ├── writerside.cfg
│   └── ...
└── README.md
```

## 🔧 Workflow Details

### Build Process
1. **Checkout**: Downloads repository code
2. **Build**: Uses JetBrains Writerside Docker action to build docs
3. **Test**: Validates documentation with Writerside checker
4. **Deploy**: Uploads and deploys to GitHub Pages

### Instance Configuration
The workflows are configured for your Writerside instance:
- **Instance ID**: `hi`
- **Instance Name**: Help Instance
- **Start Page**: Default-topic.md

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that your `Writerside/hi.tree` file exists
   - Verify all topic files referenced in the tree exist
   - Check the Actions logs for specific errors

2. **Pages Not Deploying**
   - Ensure GitHub Pages is enabled in repository settings
   - Check that the workflow has proper permissions
   - Verify the `main` branch protection rules allow Actions

3. **Search Not Working**
   - Verify Algolia credentials are correct
   - Check that `ENABLE_SEARCH` is set to `true`
   - Ensure all required secrets are added

### Viewing Logs
1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Expand job steps to see detailed logs

## 📝 Customization

### Changing Instance Name
If your Writerside instance has a different ID:
1. Check your `Writerside/your-instance.tree` file
2. Update the `instance` parameter in the workflow files
3. Update the `artifact` name accordingly

### Adding Custom Steps
You can extend the workflows by adding steps before the deployment:
- Custom preprocessing
- Additional testing
- Asset optimization
- Custom integrations

## 🔗 Useful Links

- [Writerside Documentation](https://www.jetbrains.com/help/writerside/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Algolia Documentation](https://www.algolia.com/doc/)

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the workflow logs in the Actions tab
3. Consult the Writerside documentation
4. Open an issue in this repository
