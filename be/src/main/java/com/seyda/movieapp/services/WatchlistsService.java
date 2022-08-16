package com.seyda.movieapp.services;

import com.seyda.movieapp.entities.ToWatch;
import com.seyda.movieapp.repositories.ToWatchRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WatchlistsService {
    
    private ToWatchRepo toWatchRepo;
    public List<ToWatch> getAll() {
    return toWatchRepo.findAll();
  }

  public List<ToWatch> getAllWatchlist(Long id) {
    return toWatchRepo.findAllByMovie_Id(id);
  }

  public List<ToWatch> getAllUser(Long id) {
    return null;
  }

  public List<ToWatch> create(ToWatch watchlist) {
    toWatchRepo.save(watchlist);
    return getAllWatchlist(watchlist.getMovie().getId());
  }

  public void delete(Long id) {
    toWatchRepo.deleteById(id);
  }

}
