package com.localcommerce.controller;

import com.localcommerce.dto.ComercioDTO;
import com.localcommerce.service.ComercioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/comercios")
@Tag(name = "Comércios", description = "API para gerenciamento de comércios locais")
public class ComercioController {

    @Autowired
    private ComercioService comercioService;

    @GetMapping
    @Operation(summary = "Listar todos os comércios", description = "Retorna uma lista de todos os comércios cadastrados")
    @ApiResponse(responseCode = "200", description = "Lista de comércios retornada com sucesso")
    public List<ComercioDTO> listarTodos() {
        return comercioService.listarTodos();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar comércio por ID", description = "Retorna um comércio específico pelo seu ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Comércio encontrado"),
        @ApiResponse(responseCode = "404", description = "Comércio não encontrado")
    })
    public ResponseEntity<ComercioDTO> buscarPorId(
            @Parameter(description = "ID do comércio", required = true)
            @PathVariable UUID id) {
        return ResponseEntity.ok(comercioService.buscarPorId(id));
    }

    @GetMapping("/codigo/{codigoAcesso}")
    @Operation(summary = "Buscar comércio por código de acesso", description = "Retorna um comércio específico pelo seu código de acesso")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Comércio encontrado"),
        @ApiResponse(responseCode = "404", description = "Comércio não encontrado")
    })
    public ResponseEntity<ComercioDTO> buscarPorCodigoAcesso(
            @Parameter(description = "Código de acesso do comércio", required = true)
            @PathVariable String codigoAcesso) {
        return ResponseEntity.ok(comercioService.buscarPorCodigoAcesso(codigoAcesso));
    }

    @PostMapping
    @Operation(summary = "Criar novo comércio", description = "Cria um novo comércio com os dados fornecidos")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Comércio criado com sucesso"),
        @ApiResponse(responseCode = "400", description = "Dados inválidos fornecidos")
    })
    public ResponseEntity<ComercioDTO> criar(
            @Parameter(description = "Dados do comércio a ser criado", required = true)
            @RequestBody ComercioDTO comercioDTO) {
        return ResponseEntity.ok(comercioService.criar(comercioDTO));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Atualizar comércio por ID", description = "Atualiza um comércio existente pelo seu ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Comércio atualizado com sucesso"),
        @ApiResponse(responseCode = "404", description = "Comércio não encontrado"),
        @ApiResponse(responseCode = "400", description = "Dados inválidos fornecidos")
    })
    public ResponseEntity<ComercioDTO> atualizar(
            @Parameter(description = "ID do comércio", required = true)
            @PathVariable UUID id,
            @Parameter(description = "Dados atualizados do comércio", required = true)
            @RequestBody ComercioDTO comercioDTO) {
        return ResponseEntity.ok(comercioService.atualizar(id, comercioDTO));
    }

    @PutMapping("/codigo/{codigoAcesso}")
    @Operation(summary = "Atualizar comércio por código de acesso", description = "Atualiza um comércio existente pelo seu código de acesso")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Comércio atualizado com sucesso"),
        @ApiResponse(responseCode = "404", description = "Comércio não encontrado"),
        @ApiResponse(responseCode = "400", description = "Dados inválidos fornecidos")
    })
    public ResponseEntity<ComercioDTO> atualizarPorCodigoAcesso(
            @Parameter(description = "Código de acesso do comércio", required = true)
            @PathVariable String codigoAcesso,
            @Parameter(description = "Dados atualizados do comércio", required = true)
            @RequestBody ComercioDTO comercioDTO) {
        return ResponseEntity.ok(comercioService.atualizarPorCodigoAcesso(codigoAcesso, comercioDTO));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Deletar comércio", description = "Remove um comércio pelo seu ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Comércio deletado com sucesso"),
        @ApiResponse(responseCode = "404", description = "Comércio não encontrado")
    })
    public ResponseEntity<Void> deletar(
            @Parameter(description = "ID do comércio", required = true)
            @PathVariable UUID id) {
        comercioService.deletar(id);
        return ResponseEntity.ok().build();
    }
}
