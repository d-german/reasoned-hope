# Quick Start Guide

Get your Writerside documentation with Algolia search up and running in minutes!

## ⚡ Immediate Setup (5 minutes)

### Step 1: Configure Repository Secrets
1. Go to [Repository Settings → Secrets](https://github.com/d-german/reasoned-hope/settings/secrets/actions)
2. Click **New repository secret**
3. Add: `ALGOLIA_WRITE_API_KEY` = `73637d0f99d13697983b68027df485ff`

### Step 2: Enable GitHub Pages
1. Go to [Repository Settings → Pages](https://github.com/d-german/reasoned-hope/settings/pages)
2. Set **Source** to **GitHub Actions**
3. Save

### Step 3: Set Permissions
1. Go to [Settings → Actions → General](https://github.com/d-german/reasoned-hope/settings/actions)
2. Select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Save

### Step 4: Deploy
1. Push any change to trigger deployment, or
2. Go to [Actions tab](https://github.com/d-german/reasoned-hope/actions) and run workflow manually

## 🎯 What You Get

After setup completion:

- **📖 Live Documentation**: `https://d-german.github.io/reasoned-hope/`
- **🔍 Algolia Search**: Integrated search with real-time results
- **🚀 Auto-Deploy**: Every push to main triggers rebuild
- **✅ Testing**: Automated documentation validation

## 🔧 Customization

### Adding Content
1. Edit files in `Writerside/topics/`
2. Update table of contents in `Writerside/hi.tree`
3. Commit and push - site rebuilds automatically

### Search Configuration
- Modify `algolia-config.json` for search settings
- Search UI is automatically integrated into all pages
- Content is re-indexed on every deployment

## 🆘 Need Help?

- **Setup Issues**: See `DEPLOYMENT_SETUP.md` for detailed troubleshooting
- **Build Failures**: Check the [Actions tab](https://github.com/d-german/reasoned-hope/actions) for logs
- **Search Problems**: Verify Algolia credentials and indexing logs

## ✅ Verification

Your setup is complete when:
- [ ] Repository secrets are configured
- [ ] GitHub Pages shows "GitHub Actions" as source
- [ ] First workflow run completes successfully
- [ ] Site loads at `https://d-german.github.io/reasoned-hope/`
- [ ] Search returns results when you type

**Total setup time: ~5 minutes** ⏱️
