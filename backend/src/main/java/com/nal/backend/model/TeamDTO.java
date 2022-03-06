package com.nal.backend.model;

import com.nal.backend.domain.Team;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamDTO implements Serializable {
    private Long id;
    private String name;
    private String description;
    private String avatar;

    public TeamDTO(Team team) {
        this.id = team.getId();
        this.name = team.getName();
        this.description = team.getDescription();
        this.avatar = team.getAvatar();
    }
}
