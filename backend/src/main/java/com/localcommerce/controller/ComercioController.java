package com.localcommerce.controller;

import com.localcommerce.dto.ComercioDTO;
import com.localcommerce.service.ComercioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/comercios")
public class ComercioController {

    @Autowired
    private ComercioService comercioService;

    @GetMapping
    public List<ComercioDTO> listarTodos() {
        return comercioService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ComercioDTO> buscarPorId(@PathVariable UUID id) {
        return ResponseEntity.ok(comercioService.buscarPorId(id));
    }

    @GetMapping("/codigo/{codigoAcesso}")
    public ResponseEntity<ComercioDTO> buscarPorCodigoAcesso(@PathVariable String codigoAcesso) {
        return ResponseEntity.ok(comercioService.buscarPorCodigoAcesso(codigoAcesso));
    }

    @PostMapping
    public ResponseEntity<ComercioDTO> criar(@RequestBody ComercioDTO comercioDTO) {
        return ResponseEntity.ok(comercioService.criar(comercioDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ComercioDTO> atualizar(@PathVariable UUID id, @RequestBody ComercioDTO comercioDTO) {
        return ResponseEntity.ok(comercioService.atualizar(id, comercioDTO));
    }

    @PutMapping("/codigo/{codigoAcesso}")
    public ResponseEntity<ComercioDTO> atualizarPorCodigoAcesso(
            @PathVariable String codigoAcesso,
            @RequestBody ComercioDTO comercioDTO) {
        return ResponseEntity.ok(comercioService.atualizarPorCodigoAcesso(codigoAcesso, comercioDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable UUID id) {
        comercioService.deletar(id);
        return ResponseEntity.ok().build();
    }
}
