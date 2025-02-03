package com.placeti.backenddesafio.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placeti.backenddesafio.dto.TipoComercioDTO;
import com.placeti.backenddesafio.repository.TipoComercioRepository;


@Service
public class TipoComercioService{
	
	@Autowired
	private TipoComercioRepository tipoComercioRepository;
	
	public Optional<TipoComercioDTO> pesquisarTipoComercio(Long id){
		return tipoComercioRepository.findById(id);
	}
	
	public List<TipoComercioDTO> pesquisarTipoComercios(){
		return new ArrayList<>(tipoComercioRepository.findAll());
	}
	
	public void incluirTipoComercio(TipoComercioDTO dto) {
		tipoComercioRepository.save(dto);
	}
	
	public void alterarTipoComercio(TipoComercioDTO dto) {
		TipoComercioDTO novoTipoComercio = tipoComercioRepository.getReferenceById(dto.getId());
		updateTipoComercio(novoTipoComercio, dto);
		tipoComercioRepository.save(novoTipoComercio);
	}
	
	private void updateTipoComercio(TipoComercioDTO novoTipoComercio, TipoComercioDTO atualDto) {
		novoTipoComercio.setNome(atualDto.getNome());
		novoTipoComercio.setDescricao(atualDto.getDescricao());
	}
	
	public boolean consegueExcluirTipoComercio(Long id) {
		if(tipoComercioRepository.existsById(id)) {
			tipoComercioRepository.deleteById(id);
			return true;
		}
		return false;
	}
	
}