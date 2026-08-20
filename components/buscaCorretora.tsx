"use client";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAtom } from "jotai";
import { buscaNomeComercialAtom } from "@/atoms/corretora";

export function SearchBar() {
  const [buscaNomeComercial, setBuscaNomeComercial] = useAtom(
    buscaNomeComercialAtom,
  );

  return (
    <TextField
      fullWidth
      placeholder="Digite o nome comercial da corretora"
      value={buscaNomeComercial}
      onChange={(e) => setBuscaNomeComercial(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
