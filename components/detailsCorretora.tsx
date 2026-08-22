'use client';

import { Box, Chip, Divider, Grid, Typography } from '@mui/material';

import { Corretora } from '@/types/corretora';
import { formatarCep } from '@/utils/format/cep';
import { formatarCNPJ } from '@/utils/format/cnpj';
import { formatarData } from '@/utils/format/data';
import { formatarValorMoeda } from '@/utils/format/moeda';
import { formatarTelefone } from '@/utils/format/telefone';

interface Props {
  corretora: Corretora;
}

/** Componente para exibir os detalhes da corretora com todos os seus atributos */
function RowValue({ label, value }: { label: string; value?: string }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Typography
        variant="caption"
        sx={{ display: 'block', mb: 0.5, textTransform: 'uppercase' }}
      >
        {label}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
    </Box>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
      <Typography
        variant="h6"
        color="primary"
        sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
      >
        {title}
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </Box>
  );
}

export function CardDetailsCorretora({ corretora }: Props) {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip
            label={corretora.type || 'CORRETORA'}
            size="small"
            variant="outlined"
            color="primary"
          />
          <Chip
            label= {corretora.status === 'EM FUNCIONAMENTO NORMAL'
              ? 'ATIVA'
              : (corretora.status || 'STATUS INDEFINIDO')}
            size="small"
            color="primary"
          />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {corretora.nome_comercial || 'NOME INDEFINIDO'}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
          {corretora.nome_social || 'NOME SOCIAL INDEFINIDO'}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="caption"
            color="text.primary"
            sx={{ display: 'block' }}
          >
            PATRIMÔNIO LÍQUIDO
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold' }}
            color="primary.main"
          >
            {formatarValorMoeda(
              Number(corretora.valor_patrimonio_liquido || 0),
            )}
          </Typography>
          <Typography
            variant="caption"
            color="text.primary"
            sx={{ display: 'block', mt: 0.5 }}
          >
            DATA PATRIMÔNIO LÍQUIDO:{' '}
            {formatarData(
              new Date(corretora.data_patrimonio_liquido || 'DATA INDEFINIDA'),
            )}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ textAlign: { xs: 'left', md: 'right' } }}
        >
          <Typography
            variant="caption"
            color="text.primary"
            sx={{ display: 'block' }}
            gutterBottom
          >
            CÓDIGO CVM
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {corretora.codigo_cvm}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 2, pt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionTitle title="Identificação" />

          <RowValue
            label="CNPJ"
            value={formatarCNPJ(corretora.cnpj) || 'CNPJ INDEFINIDO'}
          />
          <RowValue
            label="Data de Registro"
            value={formatarData(
              new Date(corretora.data_registro || 'DATA INDEFINIDA'),
            )}
          />
          <RowValue
            label="Início da Situação"
            value={formatarData(
              new Date(corretora.data_inicio_situacao || 'DATA INDEFINIDA'),
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <SectionTitle title="Endereço" />
          <RowValue
            label="Logradouro"
            value={`${corretora.logradouro}${corretora.complemento ? `, ${corretora.complemento}` : ''}`}
          />
          <RowValue label="Bairro" value={corretora.bairro} />
          <RowValue
            label="Cidade / UF"
            value={`${corretora.municipio} - ${corretora.uf}`}
          />
          <RowValue label="País" value={corretora.pais || 'PAÍS INDEFINIDO'} />
          <RowValue
            label="CEP"
            value={formatarCep(corretora.cep) || 'CEP INDEFINIDO'}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <SectionTitle title="Contato" />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <RowValue
              label="E-mail"
              value={corretora.email || 'EMAIL INDEFINIDO'}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <RowValue
              label="Telefone"
              value={
                formatarTelefone(corretora.telefone) || 'TELEFONE INDEFINIDO'
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
