package com.localcommerce.service;

import com.localcommerce.dto.ComercioDTO;
import com.localcommerce.model.Comercio;
import com.localcommerce.repository.ComercioRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ComercioService {

    @Autowired
    private ComercioRepository comercioRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional(readOnly = true)
    public List<ComercioDTO> listarTodos() {
        return comercioRepository.findAll().stream()
                .map(comercio -> modelMapper.map(comercio, ComercioDTO.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ComercioDTO buscarPorId(UUID id) {
        return comercioRepository.findById(id)
                .map(comercio -> modelMapper.map(comercio, ComercioDTO.class))
                .orElseThrow(() -> new RuntimeException("Comércio não encontrado"));
    }

    @Transactional(readOnly = true)
    public ComercioDTO buscarPorCodigoAcesso(String codigoAcesso) {
        return comercioRepository.findByCodigoAcesso(codigoAcesso)
                .map(comercio -> modelMapper.map(comercio, ComercioDTO.class))
                .orElseThrow(() -> new RuntimeException("Comércio não encontrado"));
    }

    @Transactional
    public ComercioDTO criar(ComercioDTO comercioDTO) {
        Comercio comercio = modelMapper.map(comercioDTO, Comercio.class);
        comercio.setCodigoAcesso(gerarCodigoAcesso());
        return modelMapper.map(comercioRepository.save(comercio), ComercioDTO.class);
    }

    @Transactional
    public ComercioDTO atualizar(UUID id, ComercioDTO comercioDTO) {
        return comercioRepository.findById(id)
                .map(comercio -> {
                    modelMapper.map(comercioDTO, comercio);
                    return modelMapper.map(comercioRepository.save(comercio), ComercioDTO.class);
                })
                .orElseThrow(() -> new RuntimeException("Comércio não encontrado"));
    }

    @Transactional
    public ComercioDTO atualizarPorCodigoAcesso(String codigoAcesso, ComercioDTO comercioDTO) {
        return comercioRepository.findByCodigoAcesso(codigoAcesso)
                .map(comercio -> {
                    modelMapper.map(comercioDTO, comercio);
                    return modelMapper.map(comercioRepository.save(comercio), ComercioDTO.class);
                })
                .orElseThrow(() -> new RuntimeException("Comércio não encontrado"));
    }

    @Transactional
    public void deletar(UUID id) {
        comercioRepository.deleteById(id);
    }

    private String gerarCodigoAcesso() {
        return UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }
}
