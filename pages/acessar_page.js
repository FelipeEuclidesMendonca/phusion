const { I } = inject();

module.exports = {

  abrirNavegador(url){
    I.amOnPage(url)
  }
}
