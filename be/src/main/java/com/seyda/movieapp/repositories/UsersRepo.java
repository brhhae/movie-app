package com.seyda.movieapp.repositories;

import com.seyda.movieapp.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepo extends JpaRepository<Users, Long> {
}
