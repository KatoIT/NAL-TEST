package com.nal.backend.controller;

import com.nal.backend.domain.Team;
import com.nal.backend.model.TeamDTO;
import com.nal.backend.service.team.ITeamService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/teams")
public class TeamController {
    @Autowired
    private ITeamService teamService;

    @GetMapping("")
    public ResponseEntity<?> getAllTeam() {
        List<Team> teams = teamService.findAll();
        List<TeamDTO> teamDTOList = teams.stream().map(TeamDTO::new).collect(Collectors.toList());
        if (!teamDTOList.isEmpty()) {
            return new ResponseEntity<>(teamDTOList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No teams", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTeam(@PathVariable("id") Long id) {
        Optional<Team> optionalTeam = teamService.findById(id);
        if (optionalTeam.isPresent()) {
            Team team = optionalTeam.get();
            TeamDTO teamDTO = new TeamDTO(team);
            return new ResponseEntity<>(teamDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Team do not exist", HttpStatus.BAD_REQUEST);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateTeam(@PathVariable("id") Long id, @RequestBody TeamDTO teamDTO) {
        Optional<Team> optionalTeam = teamService.findById(id);
        if (optionalTeam.isPresent()) {
            Team team = optionalTeam.get();
            teamDTO.setId(team.getId());
            BeanUtils.copyProperties(teamDTO, team);
            teamService.save(team);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Team do not exist", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTeam(@PathVariable("id") Long id) {
        Optional<Team> optionalTeam = teamService.findById(id);
        if (optionalTeam.isPresent()) {
            teamService.remove(id);
            return new ResponseEntity<>("Delete successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Team do not exist", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> createTeam(@RequestBody TeamDTO teamDTO) {
        Optional<Team> optionalTeam = teamService.findTeamByName(teamDTO.getName());
        if (optionalTeam.isPresent()) {
            return new ResponseEntity<>("Team already exists", HttpStatus.BAD_REQUEST);
        }
        Team team = new Team();
        teamDTO.setId(team.getId());
        BeanUtils.copyProperties(teamDTO, team);
        teamService.save(team);
        return new ResponseEntity<>(teamDTO, HttpStatus.CREATED);
    }


}
