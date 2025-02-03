package com.placeti.backenddesafio.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placeti.backenddesafio.dto.CidadeDTO;
import com.placeti.backenddesafio.repository.CidadeRepository;

//------------------------------------------------------------------
/** Service usado para acessar os repositórios da aplicação */
//------------------------------------------------------------------
@Service
public class CidadeService {

	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	CidadeRepository cidadeRepository;


	//---------------------------------------------------------
	/** Método que busca uma cidade pelo seu ID */
	//---------------------------------------------------------
	public Optional<CidadeDTO> pesquisarCidade(Long id) {
		return cidadeRepository.findById(id);
	}

	//---------------------------------------------------------
	/** Método que retorna todas as cidades cadastradas */
	//---------------------------------------------------------
	public List<CidadeDTO> pesquisarCidades() {
		return cidadeRepository.findAll();
	}

	//----------------------------------------------------------
	/** Método chamado para incluir uma nova cidade */
	//----------------------------------------------------------	
	public void incluirCidade(CidadeDTO dto) {
		cidadeRepository.save(dto);
	}

	//----------------------------------------------------------
	/** Método chamado para alterar os dados de uma cidade */
	//----------------------------------------------------------
	public void alterarCidade(CidadeDTO dto) {
		CidadeDTO cidadeAtualizada = cidadeRepository.getReferenceById(dto.getId());
		updateCidade(cidadeAtualizada, dto);
		cidadeRepository.save(cidadeAtualizada);
	}

	private void updateCidade(CidadeDTO cidadeAtualizada, CidadeDTO dto) {
		cidadeAtualizada.setNome(dto.getNome());
		cidadeAtualizada.setUf(dto.getUf());
		cidadeAtualizada.setCapital(dto.getCapital());
	}

	//----------------------------------------------------------
	/** Método chamado para excluir uma cidade */
	//----------------------------------------------------------	
	public boolean consegueExcluirCidade(Long idCidade) {
		if(cidadeRepository.existsById(idCidade)) {
			cidadeRepository.deleteById(idCidade);
			return true;
		}
		return false;
		
	}
}
