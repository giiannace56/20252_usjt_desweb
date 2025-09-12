import Pedido from "./Pedido";
import Hippo from "./Hippo";
const app = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Hippo 
            tipo ="hippo"
            tamanho="3"
            />
            <Hippo
            tipo ="hippo"
            tamanho="5"
            espelhamento="flip-horizontal"
            />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido
            data="14/09/2025"
            icone="car"
            titulo="Carro"
            descricao="Porsche Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="14/09/2025"
            icone="tractor"
            titulo="Trator"
            descricao="trator Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido 
           data="14/09/2025"
           icone="house"
           titulo="Casa"
           descricao="Casa Amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido 
           data="14/09/2025"
           icone="book"
           titulo="livro"
           descricao="livro Amarelo" />
        </div>
      </div>
    </div>
  );
};
export default app