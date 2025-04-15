package com.localcommerce.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "comercios")
public class Comercio {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(updatable = false, nullable = false)
    private UUID id;

    @Column(nullable = false)
    private String nome;

    @Column(length = 1000)
    private String descricao;

    @Column(nullable = false)
    private String telefone;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false)
    private BigDecimal taxaEntrega;

    @Column(nullable = false)
    private String horarioFuncionamento;

    @Column(nullable = false)
    private String tipoComercio; // Pizzaria, Lanchonete, etc.

    private String fotoUrl;

    @Column(unique = true, nullable = false)
    private String codigoAcesso;

    @ElementCollection
    @CollectionTable(name = "cardapio", joinColumns = @JoinColumn(name = "comercio_id"))
    private List<ItemCardapio> cardapio;
}


