package com.placeti.backenddesafio.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.placeti.backenddesafio.dto.ComercioDTO;
import com.placeti.backenddesafio.repository.ComercioRepository;

@Service
public class ComercioService{
	
	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private ComercioRepository comercioRepository;
	
	public Optional<ComercioDTO> pesquisarComercio(Long id){
		return comercioRepository.findById(id);
	}
	
	public List<ComercioDTO> pesquisarComercios(){
		return new ArrayList<>(comercioRepository.findAll());
	}
	
	public void incluirComercio(ComercioDTO dto) {
		comercioRepository.save(dto);
	}
	
	public boolean consegueAlterarComercio(ComercioDTO dto) {
		if(comercioRepository.existsById(dto.getId())){
			ComercioDTO comercioAtualizado = comercioRepository.getReferenceById(dto.getId());
			updateComercio(comercioAtualizado, dto);
			comercioRepository.save(comercioAtualizado);
			return true;
		}
		return false;
	}
	
	public void updateComercio(ComercioDTO comercioAtualizado, ComercioDTO dto) {
		comercioAtualizado.setNome(dto.getNome());
		comercioAtualizado.setNomeResponsavel(dto.getNomeResponsavel());
	}
	
	public boolean consegueExcluirComercio(Long id) {
		if(comercioRepository.existsById(id)) {
		comercioRepository.deleteById(id);
		return true;
		}
		return false;
	}
	
	
	
	
	
}