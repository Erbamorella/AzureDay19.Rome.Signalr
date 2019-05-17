using AzureDay.Rome.Shared;
using AzureDay.Rome.Web.Model;

namespace AzureDay.Rome.Web.Repositories
{
    public interface IGameStateRepository
    {
        /// <summary>
        /// Set state to Open
        /// </summary>
        void OpenRegisterMode();

        /// <summary>
        /// Set state to in running
        /// </summary>
        void StartGameMode();

        /// <summary>
        /// Set state to finish
        /// </summary>
        void FinishedGameMode();

        /// <summary>
        /// Set state to closed
        /// </summary>
        void StopGame();

        /// <summary>
        /// Get current state of the game
        /// </summary>
        /// <returns></returns>
        GameState GetCurrentState();
        
    }
}