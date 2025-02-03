package com.placeti.backenddesafio.controller;

import java.util.ArrayList;
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
import com.placeti.backenddesafio.dto.TipoComercioDTO;
import com.placeti.backenddesafio.service.TipoComercioService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/tipoComercio")
public class TipoComercioController{
	
	@Autowired
	private TipoComercioService tipoComercioService;
	
	@GetMapping("/{id}")
	public Optional<TipoComercioDTO> pesquisarComercio(@PathVariable Long id){
		return tipoComercioService.pesquisarTipoComercio(id);
	}
	
	@GetMapping
	public ResponseEntity<List<TipoComercioDTO>> pesquisarComercios(){
		List<TipoComercioDTO> lista = new ArrayList<>(tipoComercioService.pesquisarTipoComercios());
		if(lista.isEmpty()) {
		return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok().body(lista);
	}
	
	@PostMapping
	public void incluirTipoComercio(@RequestBody TipoComercioDTO dto) {
		tipoComercioService.incluirTipoComercio(dto);
	}
	
	@PutMapping
	public void alterarComercio(@RequestBody TipoComercioDTO dto) {
		tipoComercioService.alterarTipoComercio(dto);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<TipoComercioDTO> excluirTipoComercio(@PathVariable Long id) {
		if(id == null) {
			return ResponseEntity.badRequest().body(null);
		}
		if(tipoComercioService.consegueExcluirTipoComercio(id)) {
			return ResponseEntity.ok().body(null);
		}
		return ResponseEntity.notFound().build();
	}
	
	
}