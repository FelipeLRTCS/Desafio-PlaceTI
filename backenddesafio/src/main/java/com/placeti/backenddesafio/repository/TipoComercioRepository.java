package com.placeti.backenddesafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placeti.backenddesafio.dto.TipoComercioDTO;

public interface TipoComercioRepository extends JpaRepository<TipoComercioDTO, Long>{
	
}