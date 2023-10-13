import { DetailPokemon } from "../interfaces/pokemon.interface"
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Box } from "@mui/system";

interface PokemonStatsPorps {
    pokemon: DetailPokemon
}

const PokemonStats = ({ pokemon }: PokemonStatsPorps) => {
    return (
        <Card>
            <CardContent>
                <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                >
                    <Grid item>
                        {pokemon ? (
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        {pokemon.stats.map((stat) => {
                                            return <TableCell sx={{ textTransform: "capitalize" }}>{stat.stat.name}</TableCell>
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pokemon.stats.map((stat) => {
                                        return <TableCell>{stat.base_stat}</TableCell>
                                    })}
                                </TableBody>
                            </Table>
                        ) : null}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PokemonStats