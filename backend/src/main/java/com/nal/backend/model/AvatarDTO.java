package com.nal.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvatarDTO implements Serializable {
    private Long id;
    private String imageName;
    private MultipartFile imageFile;
}
