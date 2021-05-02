export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  // hasKey => 从语言包中检索匹配
  if (hasKey) {
    // $t => 选取文字
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}
