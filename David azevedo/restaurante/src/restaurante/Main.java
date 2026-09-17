public class Main {

    public static void main(String[] args) {

        Pedido pedido = new Pedido(1001);

        pedido.adicionarItem("Hambúrguer", 25.00);
        pedido.adicionarItem("Batata Frita", 12.50);
        pedido.adicionarItem("Refrigerante", 7.00);

        pedido.exibirResumo();
    }
}

