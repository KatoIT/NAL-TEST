package com.nal.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProgrammingLanguageDTO implements Serializable {
    private Long id;
    private String name;
}