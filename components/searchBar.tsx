'use client';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import { useAtom } from 'jotai';

import { buscaNomeComercialAtom } from '@/atoms/corretora';

/**Componente de busca pelo nome comercial da corretora.*/
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
