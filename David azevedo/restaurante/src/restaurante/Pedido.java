import java.util.ArrayList;
import java.util.List;

public class Pedido {

    private int numeroPedido;
    private List<ItemPedido> itens;
    private double valor_total_pedido;

    public Pedido(int numeroPedido) {
        this.numeroPedido = numeroPedido;
        this.itens = new ArrayList<>();
        this.valor_total_pedido = 0.0;
    }

    public void adicionarItem(String nomePrato, double preco) {
        ItemPedido item = new ItemPedido(nomePrato, preco);
        itens.add(item);
        valor_total_pedido += preco;
    }

    public void exibirResumo() {
        System.out.println("===== RESUMO DO PEDIDO =====");
        System.out.println("Número do pedido: " + numeroPedido);

        System.out.println("\nItens do pedido:");

        for (ItemPedido item : itens) {
            System.out.printf("- %s: R$ %.2f%n",
                    item.getNomePrato(),
                    item.getPreco());
        }

        System.out.printf("%nValor total: R$ %.2f%n", valor_total_pedido);
    }
}

