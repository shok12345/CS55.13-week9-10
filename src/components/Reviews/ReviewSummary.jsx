// Simple review summary component without AI
export function GameSummary({ gameId }) {
  return (
    <div className="game__review_summary">
      <p>Read the reviews below to see what players think about this game!</p>
    </div>
  );
}

// Simple skeleton component
export function GameSummarySkeleton() {
  return (
    <div className="game__review_summary">
      <p>Loading game information...</p>
    </div>
  );
}
