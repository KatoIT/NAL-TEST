package com.nal.backend.repository;

import com.nal.backend.domain.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITeamRepository extends JpaRepository<Team, Long> {
    Optional<Team> findTeamByName(String name);

}
