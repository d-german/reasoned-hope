# 🚀 GitHub Pages + Algolia Search Setup Instructions

## You're Almost Done! Just 2 Simple Steps:

### Step 1: Enable GitHub Pages 📄

1. **Go to your repository on GitHub**
2. **Click "Settings"** (in the top menu of your repo)
3. **Scroll down to "Pages"** (in the left sidebar)
4. **Under "Source"**, select **"GitHub Actions"**
5. **Click "Save"**

That's it for GitHub Pages setup!

### Step 2: Add Algolia Secret 🔐

1. **Still in Settings**, click **"Secrets and variables"** → **"Actions"** (in left sidebar)
2. **Click "New repository secret"**
3. **Fill in:**
   - **Name**: `ALGOLIA_WRITE_API_KEY`
   - **Value**: `73637d0f99d13697983b68027df485ff`
4. **Click "Add secret"**

## 🎉 That's It! You're Done!

### What Happens Next:

1. **Push any change** to your `main` branch (or click "Actions" → "Run workflow" to trigger manually)
2. **GitHub will automatically:**
   - ✅ Build your Writerside documentation
   - ✅ Test it for errors
   - ✅ Index all content to Algolia for search
   - ✅ Deploy to GitHub Pages

3. **Your site will be available at:**
   - **Documentation**: `https://d-german.github.io/reasoned-hope/`
   - **Search**: Integrated directly into every page (top-right corner)

### ⏱️ Timeline:
- **First deployment**: ~5-10 minutes
- **Future deployments**: ~3-5 minutes
- **You'll get an email** when deployment completes

## 🔍 Search Features You'll Get:

- ⚡ **Lightning-fast search** integrated directly into every documentation page
- 🎯 **Search box in top-right corner** - just like your reference site!
- 📱 **Mobile-friendly** search interface that works on all devices
- ⌨️ **Keyboard shortcuts** (Ctrl+K to focus search, Escape to close)
- 🎨 **Beautiful search results** with highlighted terms and clean styling
- 📊 **Real-time search** as you type with instant results
- 🔍 **No separate search page needed** - search is embedded in the main interface

## 🛠️ Why One Workflow File?

You asked about having two files - you're absolutely right! I consolidated everything into **one single workflow file**:

**`.github/workflows/deploy-writerside.yml`**

This one file does everything:
- ✅ Builds your documentation
- ✅ Tests for errors
- ✅ Adds Algolia search automatically
- ✅ Deploys to GitHub Pages

**No need for multiple files or complex configurations!**

## 🚨 Troubleshooting:

### If deployment fails:
1. **Check the "Actions" tab** in your repository for error details
2. **Most common issue**: Forgot to add the `ALGOLIA_WRITE_API_KEY` secret
3. **Second most common**: GitHub Pages not enabled in Settings

### If search doesn't work:
1. **Wait 5-10 minutes** after first deployment for indexing to complete
2. **Check that the secret was added correctly** (name must be exact)
3. **Try the search page directly**: `/search.html`

## 📞 Need Help?

If something doesn't work:
1. **Check the Actions tab** for detailed error logs
2. **Verify both steps above were completed exactly**
3. **Try pushing a small change** to trigger the workflow again

---

## 🎯 Quick Summary:

1. **Settings** → **Pages** → **Source: GitHub Actions** → **Save**
2. **Settings** → **Secrets and variables** → **Actions** → **New secret**:
   - Name: `ALGOLIA_WRITE_API_KEY`
   - Value: `73637d0f99d13697983b68027df485ff`
3. **Push to main branch** or manually trigger workflow
4. **Wait 5-10 minutes** for deployment
5. **Visit your new documentation site!**

That's it! 🎉
