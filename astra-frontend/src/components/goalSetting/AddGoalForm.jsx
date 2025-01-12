import React, { useState } from "react";
import axios from "axios";

const AddGoalForm = ({ onGoalAdded }) => {
	const [goalTitle, setGoalTitle] = useState("");
	const [targetAmount, setTargetAmount] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newGoal = {
			title: goalTitle,
			targetAmount,
			currentAmount: 0, // Default value
			weeklyTarget: 0, // Default value
			progress: 0, // Default value
		};

		try {
			const response = await axios.post("http://localhost:5001/goals", newGoal);
			onGoalAdded(response.data);
			setGoalTitle("");
			setTargetAmount("");
		} catch (error) {
			console.error("Error adding goal:", error);
		}
	};

	return (
		<div className="bg-white rounded-lg shadow p-6">
			<h2 className="text-xl font-semibold mb-4">Add New Goal</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="goalTitle"
						className="block text-sm font-medium text-gray-700"
					>
						Goal Title
					</label>
					<input
						type="text"
						id="goalTitle"
						value={goalTitle}
						onChange={(e) => setGoalTitle(e.target.value)}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="targetAmount"
						className="block text-sm font-medium text-gray-700"
					>
						Target Amount (₹)
					</label>
					<input
						type="number"
						id="targetAmount"
						value={targetAmount}
						onChange={(e) => setTargetAmount(e.target.value)}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
				>
					Add Goal
				</button>
			</form>
		</div>
	);
};

export default AddGoalForm;
