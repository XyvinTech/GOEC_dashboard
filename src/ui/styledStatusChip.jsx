import styled from "styled-components";
// Define a styled component for the status chip


const StyledStatusChip = styled.span`
  padding: 4px 8px;
  border-radius: 15px; // Adjust as needed for the chip look
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  display: inline-block;
  justify-Content: center;
  align-item: center;
  min-width: 20px; // Set a minimum width for uniformity

  // Dynamically set the background color based on the status
  background-color: ${(props) => {
    // Normalize the status to uppercase for case-insensitive comparison
    console.log(props);
    const status = props.$status ? props.$status.toUpperCase() : 'UNAVAILABLE'

    if (["ACTIVE", "ONLINE", "ASSIGNED", "SUCCESS","AVAILABLE","YES"].includes(status)) {
      return "rgba(24, 73, 45, 1)"; // Green for active or successful statuses
    } else if (status === "OFFLINE") {
      return "#c0392b"; // Red for offline
    } else if (status === "INACTIVE") {
      return "#3e3c3c"; // White for inactive
    } else if (status === "PREPARING") {
      return "#115982"; // blue for preparing
    } else if (status === "FINISHING") {
      return "#5C185A"; // purple for finishing
    } else if (["UNAVAILABLE", "DISCONNECTED","NO"].includes(status)) {
      return "#B5B8C533"; // grey for unavailable or disconnected
    } else if (["UNASSIGNED", "PENDING"].includes(status)) {
      return "#65572B"; // Brown for unassigned or pending statuses
    }
    // Add a default background color if needed
    return "defaultColor";
  }};
`;


export default StyledStatusChip;
