function chamarServicoReceitaWS() {
  cnpj_digitado = document.getElementById("cnpj").value;

  alert(cnpj_digitado);

  const urlProxy = "https://cors-anywhere.herokuapp.com/";
  const urlReceitaws =
    urlProxy + "https://receitaws.com.br/v1/cnpj/" + cnpj_digitado;

  alert(urlReceitaws);
  fetch(urlReceitaws)
    .then((response) => {
      if (response.ok) {
        alert("Resposta ok ");
        return response.json();
      } else {
        alert("Resposta não ok");
      }
    })
    .then((data) => {
      console.log(`Informações do CNPJ: ${cnpj_digitado}`);
      console.log(`Nome do CNPJ: ${data.nome}`);
    })

    .catch((error) => {
      alert("ALERT erro ao requisitar ao serviço na nuvem!");
      console.error("erro ao requisitar ao serviço na nuvem!", error);
    });
}
