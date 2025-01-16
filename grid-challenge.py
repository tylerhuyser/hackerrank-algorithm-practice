def gridChallenge(grid):
    rows = len(grid)
    columns = len(grid[0])

    for i in range(rows):
        grid[i] = ''.join(sorted(grid[i]))

    for column in range(columns):
        for row in range(rows - 1):
            if grid[row][column] > grid[row + 1][column]:
                return "NO"

    return "YES"

