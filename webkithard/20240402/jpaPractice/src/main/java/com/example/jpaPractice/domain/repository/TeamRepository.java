package com.example.jpapractice.domain.repository;

import com.example.jpapractice.domain.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
