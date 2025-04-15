package com.localcommerce.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class ItemCardapioDTO {
    private String nome;
    private String descricao;
    private BigDecimal preco;
    private String fotoUrl;
}
