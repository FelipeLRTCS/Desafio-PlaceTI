package com.placeti.backenddesafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placeti.backenddesafio.dto.ComercioDTO;

public interface ComercioRepository extends JpaRepository<ComercioDTO, Long>{
	
}