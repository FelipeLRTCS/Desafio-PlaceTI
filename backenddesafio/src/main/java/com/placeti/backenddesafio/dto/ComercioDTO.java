package com.placeti.backenddesafio.dto;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "COMERCIO")
public class ComercioDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "NOME", length = 100, nullable = false)
    private String nome;
    
    @Column(name = "NOMERESPONSAVEL", length = 100, nullable = false)
    private String nomeResponsavel;
    
    @Column(name = "IDTIPOCOMERCIOFK", nullable = false)
    private Long idTipoComercioFk;
    
    @Column(name = "IDCIDADEFK", nullable = false)
    private Long idCidadeFk;
    
    
    public ComercioDTO() {
    	
    }
    
    

	public ComercioDTO(Long id, String nome, String nomeResponsavel, Long idTipoComercioFk, Long idCidadeFk) {
		this.id = id;
		this.nome = nome;
		this.nomeResponsavel = nomeResponsavel;
		this.idTipoComercioFk = idTipoComercioFk;
		this.idCidadeFk = idCidadeFk;
	}



	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNomeResponsavel() {
		return nomeResponsavel;
	}

	public void setNomeResponsavel(String nomeResponsavel) {
		this.nomeResponsavel = nomeResponsavel;
	}

	public Long getIdTipoComercioFk() {
		return idTipoComercioFk;
	}

	public void setIdTipoComercioFk(Long idTipoComercioFk) {
		this.idTipoComercioFk = idTipoComercioFk;
	}

	public Long getIdCidadeFk() {
		return idCidadeFk;
	}

	public void setIdCidadeFk(Long idCidadeFk) {
		this.idCidadeFk = idCidadeFk;
	}

	public Long getId() {
		return id;
	}
	
}