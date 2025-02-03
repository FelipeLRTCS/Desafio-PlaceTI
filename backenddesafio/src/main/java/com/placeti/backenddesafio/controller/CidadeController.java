package com.placeti.backenddesafio.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.placeti.backenddesafio.dto.CidadeDTO;
import com.placeti.backenddesafio.service.CidadeService;

//--------------------------------------------------
/** Endpoint para consultar e manter cidades */
//--------------------------------------------------
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/cidades")
public class CidadeController {
	
	@Autowired
	private CidadeService cidadeService;

	//----------------------------------------------------------
	/** Endpoint que retorna uma cidade conforme seu ID */
	//----------------------------------------------------------
	
	@GetMapping("/{id}")
	public Optional<CidadeDTO> buscarPeloId(@PathVariable Long id) {
		//Responde GET em http://localhost:8080/placeti/cidades/1
		
		return cidadeService.pesquisarCidade(id);
	}
	
	//----------------------------------------------------------
	/** Endpoint que retorna todas as cidades cadastradas */
	//----------------------------------------------------------
	@GetMapping
	public List<CidadeDTO> pesquisarCidades() {
		// Responde GET em http://localhost:8080/placeti/cidades
		return cidadeService.pesquisarCidades();
	}
	
	//----------------------------------------------------------
	/** Endpoint para incluir nova cidade */
	//----------------------------------------------------------
	@PostMapping
	public void incluirCidade(@RequestBody CidadeDTO cidadeDto) {
		//	Responde POST em http://localhost:8080/placeti/cidades
		//	Envia JSON no body:
		//	{
		//	 	"nome": "Florianópolis",
		//	  	"uf": "SC",
		//	   	"capital": true
		//	}
		cidadeService.incluirCidade(cidadeDto);
	}	
	
	//----------------------------------------------------------
	/** Endpoint para alterar cidade */
	//----------------------------------------------------------
	
	@PutMapping
	public void alterarCidade(@RequestBody CidadeDTO cidadeDto) {
		// Responde PUT em http://localhost:8080/placeti/cidades
		//   Envia JSON no body:
		//   {
		//     "id": 11,
		//     "nome": "Blumenau",
		//     "uf": "SC",
		//     "capital": false
		//   }
		
		cidadeService.alterarCidade(cidadeDto);
		
	}
	
	//----------------------------------------------------------
	/** Endpoint para excluir uma cidade */
	//----------------------------------------------------------
	@DeleteMapping("/{idCidade}")
	public ResponseEntity<CidadeDTO> excluirCidade(@PathVariable Long idCidade) {
		// Responde DELETE em http://localhost:8080/placeti/cidades/{idCidade}
		if(idCidade == null) {
			return ResponseEntity.badRequest().body(null);
		}
		if(cidadeService.consegueExcluirCidade(idCidade)) {
			return ResponseEntity.ok().body(null);
		}
		return ResponseEntity.notFound().build();
	}	
}
