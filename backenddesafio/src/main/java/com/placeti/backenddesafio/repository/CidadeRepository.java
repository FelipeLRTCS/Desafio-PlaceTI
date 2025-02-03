package com.placeti.backenddesafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placeti.backenddesafio.dto.CidadeDTO;

//----------------------------------------------
/** Repositório para entidade Cidade */
//----------------------------------------------
public interface CidadeRepository extends JpaRepository<CidadeDTO, Long> {

}
