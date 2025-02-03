package com.placeti.backenddesafio.dto;

import java.io.Serializable;
import java.util.Objects;

import com.placeti.backenddesafio.model.Cidade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//-------------------------------------------------
/** DTO que guarda os dados de uma cidade */
//-------------------------------------------------
@Entity
@Table(name = "CIDADE")
public class CidadeDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//---------------------------------------
	// Atributos do DTO
	//---------------------------------------
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID", nullable = false)
    private Long id;

    @Column(name = "NOME", length = 100, nullable = false)
    private String nome;
    
    @Column(name = "UF", length = 100, nullable = false)
    private String uf;
    
    @Column(name = "CAPITAL", nullable = false)
    private Boolean capital;
    
    public CidadeDTO() {
    }
    
    public CidadeDTO(Long id, String nome, String uf, Boolean capital) {
    	this.id = id;
    	this.nome = nome;
    	this.uf = uf;
    	this.capital = capital;
    }
    
    
    //-----------------------------------------------
    /** Carrega o DTO com dados da entidade */
    //-----------------------------------------------
    public static CidadeDTO toDTO(Cidade cidade) {
    	return new CidadeDTO(cidade.getId(),
    			cidade.getNome(),
    			cidade.getUf(),
    			cidade.getCapital());
    }

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public Boolean getCapital() {
		return capital;
	}

	public void setCapital(Boolean capital) {
		this.capital = capital;
	}

	public Long getId() {
		return id;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CidadeDTO other = (CidadeDTO) obj;
		return Objects.equals(id, other.id);
	}
    
    
    
    
}
