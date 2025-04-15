package com.localcommerce.repository;

import com.localcommerce.model.Comercio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ComercioRepository extends JpaRepository<Comercio, UUID> {
    Optional<Comercio> findByCodigoAcesso(String codigoAcesso);
}
