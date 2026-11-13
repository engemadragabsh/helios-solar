#!/usr/bin/env bash
#
# Helios Solar — GitHub upload helper
# Usage:  bash scripts/push-to-github.sh <github-url> [commit-message]
#
# Example:
#   bash scripts/push-to-github.sh https://github.com/USERNAME/helios-solar.git
#   bash scripts/push-to-github.sh https://github.com/USERNAME/helios-solar.git "add new section"
#
set -euo pipefail

if [ ! -f "package.json" ]; then
  echo "❌ Run this script from the project root (where package.json lives)."
  exit 1
fi

REMOTE_URL="${1:-}"
COMMIT_MSG="${2:-feat: Helios Solar Energy — bilingual solar company website}"

if [ -z "$REMOTE_URL" ]; then
  cat <<EOF
Usage:
  bash scripts/push-to-github.sh <github-url> [commit-message]

Example:
  bash scripts/push-to-github.sh https://github.com/USERNAME/helios-solar.git
EOF
  exit 1
fi

echo "🌐 Remote URL: $REMOTE_URL"
echo "📝 Commit message: $COMMIT_MSG"
echo ""

# 1. Initialize git if needed
if [ ! -d ".git" ]; then
  echo "① Initializing git repository…"
  git init -q
else
  echo "① Git repository already exists."
fi

# 2. Ensure main branch
git branch -M main 2>/dev/null || true

# 3. Stage files (respect .gitignore)
echo "② Staging files…"
git add -A

# Show summary of what will be committed
echo ""
echo "📋 Files to be committed (top 20):"
git diff --cached --stat | head -20
TOTAL=$(git diff --cached --stat | tail -1)
echo "   Total: $TOTAL"
echo ""

# 4. Commit (allow empty if needed)
echo "③ Creating commit…"
git commit -m "$COMMIT_MSG" --allow-empty -q
echo "   ✓ Committed"

# 5. Set remote
if git remote get-url origin > /dev/null 2>&1; then
  echo "④ Updating origin remote…"
  git remote set-url origin "$REMOTE_URL"
else
  echo "④ Adding origin remote…"
  git remote add origin "$REMOTE_URL"
fi

# 6. Push
echo "⑤ Pushing to GitHub…"
git push -u origin main

echo ""
echo "✅ Done! Your project is now on GitHub."
echo "🔗 Visit: ${REMOTE_URL%.git}"
