package com.localcommerce.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Comercio {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String nome;
    private String descricao;
    private String telefone;
    private String endereco;
    private BigDecimal taxaEntrega;
    private String horarioFuncionamento;
    private String tipoComercio; // Pizzaria, Lanchonete, etc.
    private String fotoUrl;
    private String codigoAcesso;

    @ElementCollection
    @CollectionTable(name = "cardapio", joinColumns = @JoinColumn(name = "comercio_id"))
    private List<ItemCardapio> cardapio;
}

@Data
@Embeddable
class ItemCardapio {
    private String nome;
    private String descricao;
    private BigDecimal preco;
    private String fotoUrl;
}
