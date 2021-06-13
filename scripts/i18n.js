const redirectToLangPage = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const { lang: qsLang } = params
  console.log('qsLang :', qsLang)
  const userLang = (navigator.language || navigator.userLanguage || '').split('-')[0]
  console.log('userLang :', userLang)
  const lang = qsLang || userLang
  console.log('lang :', lang)
  location.href = `${lang}/`
}

redirectToLangPage()
