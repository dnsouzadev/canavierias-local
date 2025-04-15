package com.localcommerce.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Embeddable
public class ItemCardapio {
    private String nome;
    private String descricao;
    private BigDecimal preco;
    private String fotoUrl;
}