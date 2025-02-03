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

import com.placeti.backenddesafio.dto.ComercioDTO;
import com.placeti.backenddesafio.service.ComercioService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/comercios")
public class ComercioController{
	
	@Autowired
	private ComercioService comercioService;
	
	@GetMapping("/{id}")
	public Optional<ComercioDTO> pesquisarComercio(@PathVariable Long id){
		return comercioService.pesquisarComercio(id);
	}
	
	@GetMapping
	public ResponseEntity<List<ComercioDTO>> pesquisarComercios(){
		List<ComercioDTO> lista = new ArrayList<>(comercioService.pesquisarComercios());
		if(lista.isEmpty()) {
		return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok().body(lista);
	}
	
	@PostMapping
	public void incluirComercio(@RequestBody ComercioDTO comercioDto) {
		comercioService.incluirComercio(comercioDto);
	}
	
	@PutMapping
	public ResponseEntity<ComercioDTO> alterarComercio(@RequestBody ComercioDTO comercioDto) {
		if(comercioService.consegueAlterarComercio(comercioDto)) {
			return ResponseEntity.ok().body(null);
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ComercioDTO> excluirComercio(@PathVariable Long id) {
		if(id == null) {
			return ResponseEntity.badRequest().body(null);
		}
		if(comercioService.consegueExcluirComercio(id)) {
			return ResponseEntity.ok().body(null);
		}
		return ResponseEntity.notFound().build();
	}
	
}