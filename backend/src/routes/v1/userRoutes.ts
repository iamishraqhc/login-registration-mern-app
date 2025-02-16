import express from "express";
import { getUserProfile, updateUserProfile } from "../../controllers/userControllers.ts";
import { authenticateUser } from "../../middleware/authMiddleware.ts";
import { validateUserExists } from "../../middleware/userMiddleware.ts";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User-related endpoints
 */

/**
 * @swagger
 * /v1/user/profile:
 *   get:
 *     summary: Get the authenticated user's profile
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserProfileResponse"
 *       401:
 *         description: Unauthorized
 */
router.get("/profile", authenticateUser, validateUserExists, getUserProfile);

/**
 * @swagger
 * /v1/user/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateUserRequest"
 *     responses:
 *       200:
 *         description: Successfully updated profile
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.put("/profile", authenticateUser, validateUserExists, updateUserProfile);

export default router;
