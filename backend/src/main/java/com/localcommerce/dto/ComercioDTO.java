package com.localcommerce.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
public class ComercioDTO {
    private UUID id;
    private String nome;
    private String descricao;
    private String telefone;
    private String endereco;
    private BigDecimal taxaEntrega;
    private String horarioFuncionamento;
    private String tipoComercio;
    private String fotoUrl;
    private List<ItemCardapioDTO> cardapio;
    private String codigoAcesso;
}
